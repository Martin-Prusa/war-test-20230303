import {Team} from "@/components/UI/Football";

export interface TeamListProps {
    teams: Team[]
}
export const TeamList = (props: TeamListProps) => {
    return (
        <ul>
            {props.teams
                .sort((team, team2) => team2.points - team.points)
                .map(team => <li key={team.name}>{team.name} - {team.points}</li>)}
        </ul>
    )
}