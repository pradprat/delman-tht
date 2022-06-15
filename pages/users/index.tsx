import { Heading } from "@chakra-ui/react";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import { useQuery } from "react-query";
import { useTable } from "../../hooks/useTable";
import { getUsers } from "../../services/services";
import styles from "./index.module.scss";

const Users = () => {
    const { isLoading, error, data } = useQuery("salesData", () =>
        getUsers().then(res => res.data.data),
    );
    const [dataTable, columnTable] = useTable(data);
    return (
        <>
            <Heading fontWeight={700} fontSize={"4xl"} m={2} mb={4}>
                Dashboard
            </Heading>
            <ReactDataGrid
                loading={isLoading}
                idProperty="id"
                columns={columnTable}
                dataSource={dataTable}
                style={{ minHeight: 550 }}
            />
        </>
    );
};
export default Users;
