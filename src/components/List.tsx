import * as React from 'react';
import styled from 'styled-components';

const ListDiv = styled.div`
    
    padding-top: 5rem;
    .experience {
        padding-top: 2rem;
    }
    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 1rem;
    }
    .title {
        color: white;
        margin-right: 5px;
        display: inline-block;
    }
    .companyName {
        display: inline-block;
        padding-right: 2px;
    }
    .description {
        margin-bottom: 0.5rem;
    }
`;


type experienceType = {
    title: string;
    companyName: string;
    timeLine: string;
    description: string[];
}


type ListProps = {
    listType: experienceType[];
    id: string;
    innerRef: React.MutableRefObject<HTMLDivElement|null>;
}

const List = ({ listType, id, innerRef }: ListProps) => {
    return (
        <ListDiv id={id} ref={innerRef}>
            {listType?.map((val: experienceType, key: number) => {
                return (
                    <div className="experience" key={key}>
                        <div className="header">
                            <div className="left">
                                <span className="title">{val.title}</span>
                                <span className="companyName">{val.companyName}</span>
                            </div>
                            <div className="timeLine">{val.timeLine}</div>
                        </div>
                        {
                            val.description.map((val: string, key: number) => {
                                return <li className="description" key={key}>
                                    {val}
                                </li>
                            })
                        }
                    </div>
                )
            })}
        </ListDiv>
    );
};

export default List;
