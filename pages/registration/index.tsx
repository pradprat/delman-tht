import { Box, Button, Heading, Input, Text, Toast, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "react-query";
import { createUser } from "../../services/services";
import { validateEmail } from "../../utils";
import styles from "./index.module.scss";

const Registration = () => {
    const toast = useToast();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    // const { isLoading, error, data } = useQuery("repoData", () =>
    //     ,
    // );
    const submitRegistration = () => {
        createUser({ name, email })
            .then(res => {
                toast({
                    title: "User created.",
                    description: "User "+name+" created",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                    position: "top",
                });
                console.log(res.data);
            })
            .catch(err => {
                const res = err.response;
                toast({
                    title: "Failed to Create User",
                    description: res.data.message,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                    position: "top",
                });
            });
    };
    return (
        <>
            <Heading fontWeight={700} fontSize={"4xl"} mt={2} mb={4}>
                Registration
            </Heading>

            <Box w={500} mt="1" mb="1">
                <Text
                    fontWeight="semibold"
                    lineHeight="tight"
                    noOfLines={1}
                    as="h4"
                    fontSize={24}
                    // pb={4}
                >
                    Name
                </Text>
                <Input
                    value={name}
                    placeholder="Input Name"
                    onChange={e => setname(e.target.value)}
                />
            </Box>
            <Box w={500} mt="1" mb="1">
                <Text
                    fontWeight="semibold"
                    lineHeight="tight"
                    noOfLines={1}
                    as="h4"
                    fontSize={24}
                    // pb={4}
                >
                    Email
                </Text>
                <Input
                    value={email}
                    placeholder="Input Email"
                    isInvalid={email !== "" && !validateEmail(email)}
                    onChange={e => setemail(e.target.value)}
                />
            </Box>
            <Box w={500} mt="1" mb="1">
                <Button colorScheme="cyan" color={"white"} w="full" onClick={submitRegistration}>
                    Submit
                </Button>
            </Box>
        </>
    );
};
export default Registration;
