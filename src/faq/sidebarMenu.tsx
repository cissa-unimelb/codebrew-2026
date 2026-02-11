import React, { useState } from 'react';
// Existing white/yellow icons
import locationIcon from '../assets/icons/locationIcon.svg';
import peopleIcon from '../assets/icons/peopleIcon.svg';
import resourcesIcon from '../assets/icons/resourcesIcon.svg';

import locationIconBlack from '../assets/icons/locationBW.svg';
import peopleIconBlack from '../assets/icons/peopleBW.svg';
import resourcesIconBlack from '../assets/icons/resourceBW.svg';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const SidebarMenu: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { 
            id: 'location', 
            label: 'LOCATION', 
            icon: locationIcon, 
            iconActive: locationIconBlack 
        },
        { 
            id: 'people', 
            label: 'PEOPLE', 
            icon: peopleIcon, 
            iconActive: peopleIconBlack 
        },
        { 
            id: 'resources', 
            label: 'RESOURCES', 
            icon: resourcesIcon, 
            iconActive: resourcesIconBlack 
        },
    ];

    return (
        <div className="w-72 bg-primary border-2 border-[#c6ff00] overflow-hidden rounded-[20px]">
            {tabs.map((tab) => {
                const isActive = activeTab === tab.id;

                return (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`group w-full flex items-center gap-[0.5vw] p-5 transition-colors duration-200 border-b border-[#c6ff00] last:border-b-0 ro
                            ${isActive ? 'bg-[#c6ff00] text-primary' : 'bg-primary text-[#c6ff00]'}`}
                    >
                        <span className="flex-shrink-0">
                            <img 
                                src={isActive ? tab.iconActive : tab.icon} 
                                alt={tab.label} 
                                className="w-6 h-6 transition-all duration-200" 
                            />
                        </span>

                        <span
                            className="font-bold tracking-widest text-md font-guardian-angle relative"
                            style={{ letterSpacing: '0.2em' }}
                        >
                            {!isActive && (
                            <span className="absolute left-[0] bottom-[0] h-[2px] w-full bg-current 
                                            origin-left scale-x-0 
                                            transition-transform duration-300 ease-[cubic-bezier(.4,0,.2,1)]
                                            group-hover:scale-x-100" />
                            )}
                            {tab.label}
                            

                            
                        </span>
                        
                    </button>
                );
            })}
        </div>
    );
};

export default SidebarMenu;