import { Heading } from "@chakra-ui/react";
import styles from "./index.module.scss";
const { Column, Table } = require("react-virtualized");

const Dashboard = () => {
    const list = [
        { name: "Brian Vaughn", description: "Software engineer" },
        { name: "Brian Vaughn", description: "Software engineer" },
        { name: "Brian Vaughn", description: "Software engineer" },
        { name: "Brian Vaughn", description: "Software engineer" },
        { name: "Brian Vaughn", description: "Software engineer" },
        // And so on...
    ];
    return (
        <>
            <Heading fontWeight={700} fontSize={"4xl"} m={2} mb={4}>
                Dashboard
            </Heading>
            <Table
                width={300}
                height={300}
                headerHeight={20}
                rowHeight={30}
                rowCount={list.length}
                rowGetter={({ index }: { index: number }) => list[index]}
            >
                <Column label="Name" dataKey="name" width={100} />
                <Column width={200} label="Description" dataKey="description" />
            </Table>
        </>
    );
};
export default Dashboard;
