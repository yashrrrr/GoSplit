export interface groups {
    g_id: string;
    g_name : string;
    friends: string[];
}

export interface groupProp {
    gid: string;
    setShowGrp: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AddGroupFormProps {
    Close: () => void;
    groupProp: groups[];
    setGroupProp: React.Dispatch<React.SetStateAction<groups[]>>;
}

export interface FriendsDropDownProps {
  options: string[];
  selected: string[];
  setSelected: (selected: string[]) => void;
}