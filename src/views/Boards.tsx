import { useState, useEffect } from "react";
import api from "../utils/api";
import { Link } from "react-router-dom";

interface Board {
    id: number;
    title: string;
}

const Boards = () => {
    const [boards, setBoards] = useState<Board[]>([]);

    const fetchData = async () => {
        const res = await api.getBoards();
        setBoards(res.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1>Boards</h1>
            <div>
                {boards &&
                    boards.length > 0 &&
                    boards.map((board, idx) => (
                        <div key={idx}>
                            <div>
                                <Link to={`${board.id}`}>{board.title}</Link>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Boards;
