import { Heading } from "@chakra-ui/react";
import styles from "./index.module.scss";
import DataGrid from "react-data-grid";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import { useTable } from "../hooks/useTable";
import { useEffect } from "react";
import { getSalesData } from "../services/services";
import { useQuery } from "react-query";

const Dashboard = () => {
    const { isLoading, error, data } = useQuery("salesData", () =>
        getSalesData().then(res => res.data.data),
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
export default Dashboard;
