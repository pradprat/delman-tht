import axios, { AxiosPromise } from "axios";
import { User } from "../types";

export const getSalesData = async () => {
    return axios({
        method: "get",
        url: "https://delman-fe-api.fly.dev/",
        headers: {
            accept: "application/json",
        },
    });
};
export const getUsers = async () => {
    return axios({
        method: "get",
        url: "https://delman-fe-api.fly.dev/users",
        headers: {
            accept: "application/json",
        },
    });
};
export const getUser = async (id: string) => {
    return axios({
        method: "get",
        url: `https://delman-fe-api.fly.dev/users/${id}`,
        headers: {
            accept: "application/json",
        },
    });
};
export const editUser = async (id: string, data: User) => {
    return axios({
        method: "put",
        url: `https://delman-fe-api.fly.dev/users/${id}`,
        headers: {
            accept: "application/json",
        },
        data: data,
    });
};
export const deleteUser = async (id: string) => {
    return axios({
        method: "delete",
        url: `https://delman-fe-api.fly.dev/users/${id}`,
        headers: {
            accept: "application/json",
        },
    });
};
export const createUser = async (data: User) => {
    return axios({
        method: "post",
        url: "https://delman-fe-api.fly.dev/users",
        headers: {
            accept: "application/json",
        },
        data: data,
    });
};
