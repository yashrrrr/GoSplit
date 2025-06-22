import { useEffect, useState } from "react";
import type { groupProp } from "../types/types";
import type { groups } from "../types/types";

export const Group = ({gid}:groupProp) => {
    const [grpName, setGrpName] = useState<string>("");

    useEffect(()=>{
        const store = localStorage.getItem('groups');
        const grps = store ? JSON.parse(store) : null;
        const grpsTyped: groups[] = grps as groups[]; 
        grpsTyped.map((grp: groups) => grp.g_id === gid ? setGrpName(grp.g_name) : grp);
    },[gid]);

    return (
        <>
            <p>{grpName}</p>
        </>
    );
}