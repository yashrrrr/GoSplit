import React, { useEffect, useState } from "react";
import type { groups } from "../types/types";
import '../styles/App.css';
import { Group } from "./group";
import plus_add_grp from '../assets/plus_add_grp.png';

export default function Groups() {
    const [groups, setGroups] = useState<groups[]>();
    const [showGroup, setShowGroup] = useState<boolean>(false);
    const [showPlus, setShowPlus] = useState<boolean>(true);

    useEffect(() => {
        setGroups([
            { g_name: "Group 1" },
            { g_name: "Group 2" },
            { g_name: "Group 3" },
        ]);
    }, []);

    // Listen for mouseup on the whole window
    useEffect(() => {
        if (!showPlus) {
            const handleMouseUp = () => setShowPlus(true);
            window.addEventListener('mouseup', handleMouseUp);
            return () => window.removeEventListener('mouseup', handleMouseUp);
        }
    }, [showPlus]);

    return (
        <>
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