import React from 'react';
import { useEmojiContext } from "../context/EmojiContext";
import { Card, CardContent, Typography, Button } from '@mui/material';

const Emoji = () => {

    // Using the context to get the current emoji and the function to change it
    const {emoji, changeMood} = useEmojiContext();

    // return (
    //     <div>
    //         <h1>{emoji}</h1>
    //         <button onClick={changeMood}>Change Mood</button>
    //     </div>
    // )

    // Update to use mui
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
                    Current Mood
                </Typography>
                <Typography variant="h4" component="div">
                    {emoji}
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={changeMood}
                    sx={{ marginTop: 2 }}
                >
                    Change Mood
                </Button>
            </CardContent>
        </Card>
    );
}

export default Emoji;