import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Grid,
    GridItem,
    HStack,
    Text,
    useDisclosure,
    VStack,
} from "@chakra-ui/react";
interface UserDetailProps {
    isOpen: boolean;
    onClose: () => void;
    userData?: any;
}
const UserDetail = ({ isOpen, onClose, userData }: UserDetailProps) => {
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
                </DrawerContent>
            </Drawer>
        </>
    );
};
export default UserDetail;
