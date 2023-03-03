import {useState} from "react";
import {Team} from "@/components/UI/Football/Team";
import {TeamList} from "@/components/UI/TeamList";

export const Football = () => {

    const initialTeams: Team[] = [
        { name: "Real Madrid", points: 72 },
        { name: "Barcelona", points: 68 },
        { name: "Atletico Madrid", points: 65 },
        { name: "Sevilla", points: 59 },
    ];

    const [teams, setTeams] = useState(initialTeams)


    return (
        <div>
            <h2>Teams</h2>
            <TeamList teams={teams} />
        </div>
    )
}