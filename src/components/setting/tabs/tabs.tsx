
interface Tab {
    name: string;
    isActive: boolean;
}

interface NavigationTabsProps {
    tabs: Tab[];
    onTabChange: (tabName: string) => void;
}

export function NavigationTabs({ tabs, onTabChange }: NavigationTabsProps) {
    return (
        <nav className="flex overflow-x-auto border-b mt-4">
            {tabs.map((tab) => (
                <button
                    key={tab.name}
                    onClick={() => onTabChange(tab.name)}
                    className={`px-[24px] py-[8px] hover:bg-gray-50 text-nowrap font-medium text-[16px] relative ${tab.isActive
                        ? 'text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#018AAf]'
                        : 'text-[#7E939A]'
                        }`}
                >
                    {tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}
                </button>
            ))}
        </nav>
    );
}