import { useEffect, useReducer, useState } from "react";

// Reducer function for managing the state related to Bitcoin price fetching
const bitcoinPriceReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      // Handle initial fetch state
      return { ...state, isLoading: true, isError: false };
    case "FETCH_SUCCESS":
      // Handle successful data fetch
      return { ...state, isLoading: false, bitcoinPrice: action.payload };
    case "FETCH_FAILURE":
      // Handle fetch failure
      return { ...state, isLoading: false, isError: true };
    default:
      throw new Error();
  }
};

const useBitcoinPrice = (currency) => {
  // State setup using the reducer for managing fetch status and data
  const [state, dispatch] = useReducer(bitcoinPriceReducer, {
    bitcoinPrice: "",
    isLoading: false,
    isError: false,
  });

  // State for tracking API call count and the timestamp of the first call
  const [callCount, setCallCount] = useState(0);
  const [firstCallTimeStamp, setFirstCallTimestamp] = useState(null);
  // State for managing the cooldown period
  const [cooldown, setCooldown] = useState({ isActive: false, timeLeft: 0 });

  // useEffect hook for fetching Bitcoin price data
  useEffect(() => {
    if (cooldown.isActive) {
      console.log("Currently in cooldown.");
      return; // Skip fetching if in cooldown period
    }
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        console.log("Fetching data for currency:", currency); // Log the currency being used
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        );
        const data = await response.json();
        console.log("Response data:", data); // Log the response data

        if (!didCancel) {
          dispatch({
            type: "FETCH_SUCCESS",
            payload: data.bitcoin[currency.toLowerCase()],
          });

          // Increment call count each time the effect is called
          setCallCount(prevCount => prevCount + 1); 
        }
      } catch (error) {
        if (!didCancel) {
          console.error("Error fetching data:", error); // Log any errors caught during fetch
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };

    fetchData();

    // Cleanup function to handle component unmount
    return () => {
      didCancel = true;
    };
  }, [currency]); // Dependency on currency change

  // useEffect hook for managing API call count and cooldown timer
  useEffect(() => {

    // Get the current time
    const currentTime = new Date().getTime();
  
    // Check if more than a minute has passed since the first API call
    if (firstCallTimeStamp && currentTime - firstCallTimeStamp > 60000) {
      console.log("Resetting call count and timestamp.");

      // Reset call count and timestamp after a minute has elapsed
      setCallCount(0);
      setFirstCallTimestamp(null);
    }  else if (callCount === 0 && !cooldown.isActive) {

      // If no calls have been made in the current minute and cooldown is not active
      setFirstCallTimestamp(currentTime);
    }
  
    // Activate cooldown if the call count reaches the limit and cooldown is not already active
    if (callCount >= 10 && !cooldown.isActive) {
      console.log("Activating cooldown");
      setCooldown({ isActive: true, timeLeft: 60 });
  
      // Set up an interval to count down every second
      const cooldownInterval = setInterval(() => {
        setCooldown(prevCooldown => {
          if (prevCooldown.timeLeft <= 1) {
            console.log("Cooldown ended");
            clearInterval(cooldownInterval);
            setCallCount(0); // Reset call count when cooldown ends
            setFirstCallTimestamp(null); // Reset timestamp when cooldown ends
            return { isActive: false, timeLeft: 0 };
          }
          console.log("Cooldown time left:", prevCooldown.timeLeft - 1);
          return { ...prevCooldown, timeLeft: prevCooldown.timeLeft - 1 };
        });
      }, 1000);

  
      // Cleanup function: Clear the interval when the component unmounts or the effect re-runs
      return () => {
        console.log("Clearing cooldown interval");
        clearInterval(cooldownInterval);
      };
    }
  }, [callCount, firstCallTimeStamp]); // Dependencies of the useEffect
  
  return { ...state, cooldown };
  
};

export default useBitcoinPrice;