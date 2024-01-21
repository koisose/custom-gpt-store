import {
    Streamlit,
    StreamlitComponentBase,
    withStreamlitConnection,
} from "streamlit-component-lib"
import React, {ReactNode,useEffect} from "react"

import {CenterLayout} from './component/Center'
import BasicCard from './component/Card'
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Stack } from '@mui/system';
import Box from '@mui/joy/Box';
import { Typography } from '@mui/joy';
import Card from '@mui/joy/Card';

interface State {
    numClicks: number
    isFocused: boolean
}


class MyComponent extends StreamlitComponentBase<State> {
    public state = {numClicks: 0, isFocused: false}

    public render = (): ReactNode => {
        useEffect(() => {
            // This will run after every render,
            // and will set the iframe's height to match the content height
            Streamlit.setFrameHeight();
        });
        const name = this.props.args["name"]


        return (
            <>  <CenterLayout>
                <Typography level="h1">AI Shop</Typography>
            </CenterLayout>
            <CenterLayout>
                <Typography level="h3" variant={"soft"} sx={{mb:2}}>sell goods and search goods easily using ai </Typography>
            </CenterLayout>

                <CenterLayout>
                    <Button
                        sx={{
                        mx: 2,
                            my: 2,
                            backgroundColor: "black",
                            '&:hover': {
                            backgroundColor: "grey",
                            },
                            '&:active': {
                            backgroundColor: "black",
                            },
                        }}
                        >
                        Sign in with Github
                    </Button>
                    <Button sx={{mx:2}} color="danger">Sell your goods </Button>
                    <Button color="success">See your goods </Button>
                </CenterLayout>

                <Stack direction="row" spacing={2}>
                    <Input sx={{my:2, flexGrow: 1}} placeholder={"search..."} />
                    <Button>Vector Search</Button>
                </Stack>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row'


            }} >
            <BasicCard />
                <BasicCard />
                <BasicCard />
                <BasicCard />
                <BasicCard />

            </Box>




            </>
        )
    }


}


export default withStreamlitConnection(MyComponent)
