import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
export default function BasicCard() {
    return (
        <Card sx={{ width: 320,my:2,mx:2 }}>
            <div>
                <Typography level="title-lg">Yosemite National Park</Typography>
                <Box 
                    sx={{
                    display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                    >
                    <Avatar size="sm" sx={{mx:1}}>JG</Avatar>
                    <Typography level="body-xs">Yosemite National Park</Typography>
                </Box>
                
            </div>
            <AspectRatio minHeight="120px" maxHeight="200px">
                <img
                    src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                    srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                />
            </AspectRatio>
            <CardContent orientation="horizontal">
                <div>
                    <Typography level="body-xs">Total price:</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                        $2,900
                    </Typography>
                </div>
                <Button
                    variant="solid"
                    size="md"
                    color="primary"
                    aria-label="Explore Bahamas Islands"
                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                    >
                    Explore
                </Button>
            </CardContent>
        </Card>
        );
}