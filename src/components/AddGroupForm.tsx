import { useEffect, useState } from 'react';
import '../styles/GroupAddForm.css';
import FriendsDropDown from "./FriendsDropDown";
import type { AddGroupFormProps } from '../types/types';

export default function AddgroupForm({ Close, groupProp, setGroupProp }: AddGroupFormProps) {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setGroupProp([
            ...groupProp,
            {
                g_id: Date.now().toString(),
                g_name: gName,
                friends: selectedFriends,
            }
        ]);
        Close();
    };
    const [friends, setFriends] = useState<string[]>([]);
    const [selectedFriends, setSelectedFriends] = useState<string[]>([]);
    const [gName, setGname] = useState<string>("");

    useEffect(()=>{
        setFriends([
        "Tom Jerry",
        "Yashraj",
        "Random Idiot"
    ]);
    },[]);

    return (
        <div className='form-div'>
            <form onSubmit={handleSubmit}>
                <label>Enter group name:
                    <input
                        type='text'
                        placeholder='Group name'
                        onChange={(e)=> setGname(e.target.value)}
                    ></input>
                </label>
                <label>Select Group People:</label>
                <FriendsDropDown
                    options={friends}
                    selected={selectedFriends}
                    setSelected={setSelectedFriends}
                />
                <div className="form-actions">
                    <button type="button" onClick={Close}>
                        Cancel
                    </button>
                    <input type='submit' value="Submit"/>
                </div>
            </form>
        </div>
    );
}
