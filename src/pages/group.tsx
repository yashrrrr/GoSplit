import { useEffect, useState } from "react";
import type { groupProp} from "../types/types";
import type { groups } from "../types/types";
import '../styles/group.css';

export const Group = ({gid, setShowGrp}:groupProp) => {
    const [grpName, setGrpName] = useState<string>("");
    const [members, setMembers] = useState<string[]>([]);
    const [grps, setgrps] = useState<groups[]>([]);

    useEffect(()=>{
        const store = localStorage.getItem('groups');
        setgrps(store ? JSON.parse(store) : [] as groups[]);
    });

    useEffect(()=>{
        grps.map((grp)=>{
            if(gid==grp.g_id){
                setMembers(grp.friends);
            }
        });
    }, [grps, gid]);


    useEffect(()=>{
        const store = localStorage.getItem('groups');
        const grps = store ? JSON.parse(store) : null;
        const grpsTyped: groups[] = grps as groups[]; 
        grpsTyped.map((grp: groups) => grp.g_id === gid ? setGrpName(grp.g_name) : grp);
    },[gid]);   

    const togrps = () => {
        setShowGrp(false);
    }

    return (
        <>
            <div className="nav-cont">
                <div className="navs">
                    <button className="nav-btn" onClick={togrps}>Groups</button>
                    <span className="nav-arrow">&rarr;</span>
                    <button className="nav-btn">{grpName}</button>
                </div>
            </div>
            <div className="main-panels">
                <div className="transactions-panel">
                    <div className="transactions-header">
                        <span>Transactions</span>
                        <span className="transactions-status">
                            <span className="owed">You owed</span>/<span className="borrowed">Borrowed</span>
                        </span>
                    </div>
                    <div className="transaction-list">
                        <div className="transaction-item">
                            <span className="date">12/06</span>
                            <span className="desc">Taxi Split</span>
                            <span className="amount plus">₹ 3000</span>
                        </div>
                        <div className="transaction-item">
                            <span className="date">11/06</span>
                            <span className="desc">Dinner</span>
                            <span className="amount minus">₹ 400</span>
                        </div>
                        <div className="transaction-item"></div>
                        <div className="transaction-item"></div>
                        <div className="transaction-item"></div>
                    </div>
                </div>
                <div className="members-panel">
                    <div className="members-header">Members</div>
                    <div className="members-list">
                        {members.map((member, idx)=>(
                            <div key={idx} className="member-item">{member}</div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}