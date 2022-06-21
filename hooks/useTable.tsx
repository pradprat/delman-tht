import { useEffect, useState } from "react";

export const useTable = (data: any) => {
    const [tableData, settableData] = useState<any[]>([]);
    const [tableColumn, settableColumn] = useState<any[]>([]);

    useEffect(() => {
        if (data) {
            if (data[0]) {
                const row = data[0];
                const keys = Object.keys(row);
                const column = keys.map((key) => ({ name: key }));
                settableColumn(column);
                settableData(data);
                console.log(column, data);
            }
        }
        return () => {};
    }, [data]);

    return [tableData, tableColumn];
};
