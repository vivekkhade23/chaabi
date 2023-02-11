import { Box, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countOfSubmit, randomWord, setnewTime, setScorenegative, setScorepositive } from '../Redux/Action'
import Timer from './Timer'



const Typing = () => {
    const letters = useSelector(store => store.letters)
    const score = useSelector(store => store.score)
    const submitCount = useSelector(store => store.submitCount)
    const dispatch = useDispatch()
    const [text, setText] = useState("")
    const [accuracy, setAccuracy] = useState(0)
    const [flag, setFlag] = useState(false)


    // *****************************************************

    useEffect(() => {
        dispatch(randomWord())
    }, [])

    const handleText = (e) => {
        setText(e.target.value);
        if (letters.length === e.target.value.length) {

            if (letters === e.target.value) {
                dispatch(setScorepositive());
                dispatch(countOfSubmit())
            } else {
                dispatch(setScorenegative());
                dispatch(countOfSubmit())

            }
            setText("")
        }


    }

    const handleSubmit = () => {
        setFlag(true)

        let tot = submitCount * 5;
        if (score <= 0) {
            setAccuracy(0);
        }
        else {
            let percent = Math.floor(((tot - score) / tot) * 100);
            setAccuracy(percent);
        }

    }
    // *****************************************************
    return (
        <Box>

            <Timer handleSubmit={handleSubmit} />

            <Box display="flex" width={"100vw"} margin="35px" justifyContent="center" flexDirection={"column"}>
                <Box fontSize={"35px"} fontWeight={"700"}>
                    SCORE:{score}
                </Box>
                <Text color={"#68cc45"} fontFamily={"revert"} fontSize={"45px"} fontWeight={"800"}>{letters}</Text>
                <Box display="flex" width={"100%"} justifyContent="center"  >
                    <Input onChange={(e) => handleText(e)} value={text} width={"50%"} backgroundColor={"white"} color={"black"} placeholder='Type here' />
                </Box>
                <Box>
                    <Button onClick={handleSubmit} backgroundColor={"rgb(232, 113, 97)"} >
                        Submit
                    </Button >
                </Box>

                <Box>
                    {flag ? <Box display={"flex"} flexDirection="column" color={"blue.500"}>
                        <Text >
                            Accuracy:{accuracy}
                        </Text>
                        <Text>
                            End Score:{score}

                        </Text>
                    </Box> : ""}
                </Box>
            </Box>


        </Box>
    )
}

export default Typing