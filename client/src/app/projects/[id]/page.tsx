"use client"

import React, { useState } from 'react';
import ProjectHeader from "@/app/projects/ProjectHeader";
import Board from '../BoardView';
import List from '../ListView';
import TimeLine from '../TimeLineView';

type Props = {
    params: {id: string}
}

function Project({ params }: Props) {
    const { id } = params;
    const [ activeTab, setActiveTab ] = useState("Board");
    const [ isModalNewTaskOpen, setIsModalNewTaskOpen ] = useState(false);
  return (
    <div>
        {/*  MODAL NEW TASK */}
        <ProjectHeader activeTab = { activeTab } setActiveTab = {setActiveTab} />
        {activeTab === "Board" && (
            <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
        )}
        {activeTab === "List" && (
            <List id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
        )}
        {activeTab === "TimeLine" && (
            <TimeLine id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
        )}
    </div>
  )
};

type TabButtonProps = {
    name: string;
    icon: React.ReactNode;
    setActiveTab: (tabName: string) => void;
    activeTab: string;
}

const TabButton = ({name, icon,setActiveTab, activeTab}: TabButtonProps) => {
    const isActive = activeTab === name;
    return (
        <button className={`relative flex items-center gap-2 px-1 py-2 
                        text-gray-500 after:absolute after:-bottom-[9px] after:left-0 after:h-[1px] after:w-full 
                        hover:text-blue-600 dark:text-neutral-500 dark:hover:text-white sm:px-2 lg:px-4 
                        ${isActive ? "text-blue-600 after:bg-blue-600 dark:text-white" : ""}`} 
                        onClick={() => setActiveTab(name)}>
                            {icon}
                            {name}
                        </button>
    )
}

export default Project;
