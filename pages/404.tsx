import { Box, Button, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function FourOhFour() {
    return (
        <>
            <Box m={"auto"} textAlign="center" marginTop={"5%"}>
                <img
                    src="https://cdn.dribbble.com/users/1040983/screenshots/10033348/media/4824d167d988ac89c035e15d17b0fb12.png"
                    width={"500px"}
                ></img>
                <Heading m={12}>Page Not Found</Heading>
                <Link href="/">
                    <Button bg={"#82204A"} color="white" _hover={{ bg: "#AB3E6C" }}>
                        Go Back Home
                    </Button>
                </Link>
            </Box>
        </>
    );
}
