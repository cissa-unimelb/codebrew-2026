import React, { useState } from 'react';
import locationIcon from '../assets/icons/locationIcon.svg';
import peopleIcon from '../assets/icons/peopleIcon.svg';
import resourcesIcon from '../assets/icons/resourcesIcon.svg';


const SidebarMenu = () => {
    const [activeTab, setActiveTab] = useState('location');

    const tabs = [
        { id: 'location', label: 'LOCATION', icon: <img src={locationIcon} alt="Location Icon" className="w-5 h-5" /> },
        { id: 'people', label: 'PEOPLE', icon: <img src={peopleIcon} alt="People Icon" className="w-5 h-5" /> },
        { id: 'resources', label: 'RESOURCES', icon: <img src={resourcesIcon} alt="Resources Icon" className="w-5 h-5" /> },
    ];

    return (
        <div className="w-64 bg-black border-2 border-[#D9FF54] rounded-xl overflow-hidden font-mono">
            {tabs.map((tab) => {
                const isActive = activeTab === tab.id;

                return (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-4 p-4 transition-colors duration-200 border-b border-[#D9FF54] last:border-b-0
              ${isActive
                                ? 'bg-[#c6ff00] text-primary'
                                : 'bg-primary text-[#c6ff00] hover:bg-[#c6ff00]/10'
                            }`}
                    >
                        <span className={isActive ? 'text-primary' : 'text-[#c6ff00]'}>
                            {tab.icon}
                        </span>
                        <span className="font-bold tracking-widest text-sm">
                            {tab.label}
                        </span>
                    </button>
                );
            })}
        </div>
    );
};

export default SidebarMenu;