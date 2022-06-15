import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Grid,
    GridItem,
    HStack,
    Text,
    useDisclosure,
    useToast,
    VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { deleteUser } from "../services/services";
interface UserDetailProps {
    isOpen: boolean;
    onClose: () => void;
    userData?: any;
}
const UserDetail = ({ isOpen, onClose, userData }: UserDetailProps) => {
    const toast = useToast();
    const router = useRouter();

    const onDelete = async () => {
        deleteUser(userData.id)
            .then(res => {
                toast({
                    title: "User deleted.",
                    description: "User " + userData.name + " deleted",
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
                    title: "Failed to delete User",
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
            <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"md"}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>
                    <DrawerBody p={4}>
                        <VStack p={4}>
                            {userData &&
                                Object.keys(userData)?.map(key => {
                                    return (
                                        <Grid key={key} width={"100%"} alignItems="start">
                                            <GridItem>
                                                <Text fontWeight={500}>{key}</Text>
                                            </GridItem>
                                            <GridItem>
                                                <Text>{userData[key]}</Text>
                                            </GridItem>
                                        </Grid>
                                    );
                                })}
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button colorScheme="red" onClick={onDelete}>
                            Delete User
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};
export default UserDetail;
