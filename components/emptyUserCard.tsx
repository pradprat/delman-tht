import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
} from "@chakra-ui/react";

export default function EmptyUserCard(props: any) {
    return (
        <Center py={6}>
            <Box
                maxW={"320px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"lg"}
                p={6}
                textAlign={"center"}
            >
                {/* <Avatar
                    size={"xl"}
                    src={
                        "https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
                    }
                    // alt={"Avatar Alt"}
                    mb={4}
                    pos={"relative"}
                    // _after={{
                    //     content: '""',
                    //     w: 4,
                    //     h: 4,
                    //     bg: "green.300",
                    //     border: "2px solid white",
                    //     rounded: "full",
                    //     pos: "absolute",
                    //     bottom: 0,
                    //     right: 3,
                    // }}
                />
                <Heading fontSize={"2xl"} fontFamily={"body"}>
                    {props.name}
                </Heading>
                <Text fontWeight={600} color={"gray.500"} mb={4}>
                    {props.email}
                </Text>
                <Text textAlign={"center"} color={useColorModeValue("gray.700", "gray.400")} px={3}>
                    {props.favorite_quote}
                </Text> */}
                <Heading fontSize={"2xl"} fontFamily={"body"}>
                    No Data
                </Heading>

                <Stack mt={8} direction={"row"} spacing={4}>
                    {/* <Button
                        flex={1}
                        fontSize={"sm"}
                        rounded={"full"}
                        bg={"blue.400"}
                        color={"white"}
                        boxShadow={
                            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                        }
                        _hover={{
                            bg: "blue.500",
                        }}
                        _focus={{
                            bg: "blue.500",
                        }}
                    >
                        View User Profile
                    </Button> */}
                </Stack>
            </Box>
        </Center>
    );
}
