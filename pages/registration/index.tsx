import { Box, Button, Heading, Input, Text, Toast, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import { createUser } from "../../services/services";
import { validateEmail } from "../../utils";
import styles from "./index.module.scss";

const Registration = () => {
    const router = useRouter();
    const toast = useToast();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const isValidName = useMemo(() => name.length > 0, [name]);
    const isValidEmail = useMemo(() => validateEmail(email), [email]);
    // const { isLoading, error, data } = useQuery("repoData", () =>
    //     ,
    // );
    const submitRegistration = () => {
        if (!isValidName) {
            toast({
                title: "Failed to Create User",
                description: "please provide name",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top",
            });
            return;
        }
        if (!isValidEmail) {
            toast({
                title: "Failed to Create User",
                description: "please provide email",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top",
            });
            return;
        }
        createUser({ name, email })
            .then(res => {
                toast({
                    title: "User created.",
                    description: "User " + name + " created",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                    position: "top",
                });
                router.push("/users");
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
                    isInvalid={!isValidName}
                />
                <Text color={"red"} h={4}>
                    {!isValidName && "Please provide name"}
                </Text>
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
                    isInvalid={!isValidEmail}
                    onChange={e => setemail(e.target.value)}
                />
                <Text color={"red"} h={6}>
                    {!isValidEmail && "Please provide email"}
                </Text>
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
