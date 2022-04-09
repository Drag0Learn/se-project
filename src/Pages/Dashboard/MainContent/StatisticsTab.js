import { getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentClass } from '../../../features/classes/classSlice';
import { selectUser } from '../../../features/user/userSlice';
import { getColRef } from '../../../firebase/firebase-firestore';
import { StyledPostCard } from '../../../components/styled/PostList.styled';
import { StyledStatsCard } from '../../../components/styled/StatisticsTab.styled';
import styled from 'styled-components';

function StatisticsTab() {
    const user = useSelector(selectUser);
    const currentClass = useSelector(selectCurrentClass);
    const [individualStatsList, setIndividualStatsList] = useState([]);
    const myStats = individualStatsList.filter(stat => stat.user === user.email);
    const isOnInstructorList = currentClass?.instructors_list?.includes(user.email);

    useEffect(() => {
        const individualStatsColRef = getColRef(`classes/${currentClass.c_id}/individual_stats`);
        getDocs(individualStatsColRef)
            .then((snapshot) => {
                const promises = snapshot.docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                });
                Promise.all(promises)
                    .then(stats => {
                        setIndividualStatsList([...stats]);
                    })

            })
            .catch(err => console.log(err.message))
    }, [])

    return (
        <div>
            <StyledStatsCard>
                <div>Overall Class Statistics</div>
                <p>{`total current posts : ${currentClass.total_posts}`}</p>
                <p>{`total current comments : ${currentClass.total_contributions - currentClass.total_deleted_contributions - currentClass.total_posts}`}</p>
                <p>{`total overall contributions : ${currentClass.total_contributions}`}</p>
                <p>{`total anonymous contributions : ${currentClass.total_anonymous_contributions}`}</p>
            </StyledStatsCard>
            {myStats.length > 0 &&
                <>
                    <MyStats>
                        <StatItem>
                            <p>Total contributions :</p>
                            <p>{myStats[0].total_contributions}</p>
                        </StatItem>
                        <StatItem>
                            <p>Total posts :</p>
                            <p>{myStats[0].total_posts}</p>
                        </StatItem>
                    </MyStats>
                    <pre>{JSON.stringify(myStats[0], null, 2)}</pre>
                    <br />
                </>
            }
            {
                isOnInstructorList
                &&
                individualStatsList.length > 0
                &&
                <>
                    <div>Individual Stats of Students/Instructors enrolled in this class</div>
                    {individualStatsList.map(stat => (
                        <StyledPostCard key={stat.id}>
                            {`${stat.user} :\n`}
                            Total Posts : {stat.total_posts}
                            <br />
                            Total Contributions : {stat.total_contributions}
                        </StyledPostCard>
                    ))}
                </>
            }
        </div>
    );
}

const MyStats = styled.div`
    display: flex;
    flex-direction: column;
    gap: calc(var(--post-card-margin) / 2);
`
const StatItem = styled.div`
    margin-inline: min(var(--post-card-margin) * 2, 20%);
    display: flex;
    justify-content: space-between;
`

export default StatisticsTab;