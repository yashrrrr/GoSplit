import React, { useEffect, useState } from "react";
import type { groups } from "../types/types";
import '../styles/App.css';
import { Group } from "./group";
import plus_add_grp from '../assets/plus_add_grp.png';
import AddgroupForm from "../components/AddGroupForm";


export default function Groups() {
    const [groups, setGroups] = useState<groups[]>(() => {
        if(localStorage.getItem('groups')){
        const stored = localStorage.getItem('groups');
        return stored ? JSON.parse(stored) as groups[] : [];
        } else {
            return [
            { g_name: "Group 1", friends: ["bob"] },
            { g_name: "Group 2", friends: ["bob"]  },
            { g_name: "Group 3", friends: ["bob"]  },
        ];
        }
    });
    const [showGroup, setShowGroup] = useState<boolean>(false);
    const [showPlus, setShowPlus] = useState<boolean>(true);
    const [showForm, setShowform] = useState<boolean>(false);

    // Listen for mouseup on the whole window
    useEffect(() => {
        if (!showPlus) {
            const handleMouseUp = () => {
                setShowPlus(true)
                setShowform(true);
            };
            window.addEventListener('mouseup', handleMouseUp);
            return () => window.removeEventListener('mouseup', handleMouseUp);
        }
    }, [showPlus]);

    useEffect(()=>{
        localStorage.setItem('groups', JSON.stringify(groups));
    },[groups]);

    return (
        <>
            {showForm &&(
                <AddgroupForm Close={() => setShowform(false)} groupProp={groups ?? []} setGroupProp={setGroups}/>
            )
            }
            {!showGroup && (
                <>
                    <div className="groups-list-container">
                        <ul className="groups-list">
                        {groups?.map((group, idx) => (
                            <React.Fragment key={group.g_name + idx}>
                            <li className="group-item" onClick={() => setShowGroup(true)}>
                                <p> {group.g_name} </p>
                            </li>
                            </React.Fragment>
                        ))}
                        </ul>
                    </div>

                    <div
                        className="plus-container"
                        onMouseDown={() => setShowPlus(false)}
                    >
                        {showPlus && (
                            <img src={plus_add_grp} alt="Add group" draggable={false} />
                        )}
                    </div>
                </>
            )}

            {showGroup && (
                <Group />
            )}
        </>
    );
}