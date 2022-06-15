import { Heading, Input, InputGroup, InputLeftElement, useDisclosure } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useQuery } from "react-query";
import EmptyUserCard from "../../components/emptyUserCard";
import UserCard from "../../components/userCard";
import UserDetail from "../../components/userDetail";
import { getUsers } from "../../services/services";
import styles from "./index.module.scss";

const Search = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [search, setsearch] = useState("");
    const { isLoading, error, data } = useQuery("salesData", () =>
        getUsers().then(res => res.data.data),
    );
    const searchedUser = useMemo(
        () => data?.find((user: any) => user?.email === search),
        [data, search],
    );

    return (
        <>
            <Heading fontWeight={700} fontSize={"4xl"} m={2} mb={4}>
                Search
            </Heading>
            <InputGroup>
                <InputLeftElement pointerEvents="none">
                    <FiSearch />
                </InputLeftElement>
                <Input
                    value={search}
                    type="text"
                    placeholder="Search user by email"
                    onChange={e => setsearch(e.target.value)}
                />
            </InputGroup>
            {(searchedUser && <UserCard {...searchedUser} onOpenProfile={onOpen}></UserCard>) || (
                <EmptyUserCard></EmptyUserCard>
            )}
            <UserDetail isOpen={isOpen} onClose={onClose} userData={searchedUser}></UserDetail>
        </>
    );
};
export default Search;
