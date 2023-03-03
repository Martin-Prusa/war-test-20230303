import {Team} from "@/components/UI/Football";
import {ChangeEvent, FormEvent, useState} from "react";
import {Input} from "postcss";

export interface TeamFormProps {
    teams: Team[],
    setTeams: any
}

export const TeamForm = ({teams, setTeams}: TeamFormProps) => {

    const [newTeam, setNewTeam] = useState({name: "", points: 0})

    const handleAdd = (e: FormEvent) => {
        e.preventDefault()
        console.log(newTeam)
        setTeams([...teams, newTeam])
    }

    const setName = (name: string) => {
        setNewTeam({...newTeam, name})
    }

    const setPoints = (points: string) => {
        if(points === '') return
        setNewTeam({...newTeam, points: parseInt(points)})
    }


    return  (
        <form onSubmit={handleAdd}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" onChange={e => setName(e.target.value)} value={newTeam.name}/>
            <label htmlFor="points">Points</label>
            <input id="points" type="number" onChange={e => setPoints(e.target.value)} value={newTeam.points}/>
            <button type="submit">Add team</button>
        </form>
    )
}