import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../utils/api";

const Detail = () => {
    interface Board {
        id: number;
        title: string;
        content: string;
    }

    const { detail } = useParams();

    const [board, setBoard] = useState<Board>();

    const fetchData = async () => {
        if (detail) {
            const res = await api.getBoard(detail);
            setBoard(res.data);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1>Detail</h1>
            <div> {board?.title} </div>
            <div> {board?.content} </div>
        </>
    );
};

export default Detail;
