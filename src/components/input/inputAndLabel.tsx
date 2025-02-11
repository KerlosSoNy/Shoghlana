'use client';
import React, { useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';

type InputAndLabelProps = {
    label?: string;
    error?: string;
    width?: string;
    placeholder?: string;
    icon?: React.ReactNode;
    see?: boolean;
    isLogin?: boolean;
    type?: React.ComponentProps<'input'>['type'];
} & React.ComponentProps<'input'>;

export default function InputAndLabel({
    label,
    error,
    width = 'w-full',
    placeholder,
    icon,
    isLogin,
    see = false,
    type,
    ...props
}: InputAndLabelProps) {
    const [visible, setVisible] = useState(true);
    const [typeInput, setTypeInput] = useState(type);

    const handleVisible = () => {
        setTypeInput(typeInput === 'password' ? 'text' : 'password');
        setVisible(!visible);
    };

    return (
        <div
            className={`flex flex-col relative font-semibold dark:text-white ${width}`}
        >
            <div className='flex flex-row'>
                <label
                    id={label}
                    htmlFor={label}
                    className={`text-[13.45px] ${isLogin ? "" : "mb-1"} text-[#84818A]`}
                >
                    {label}
                </label>
            </div>
            <div className='relative w-[100%]'>
                <input
                    title={label}
                    placeholder={placeholder}
                    id={label}
                    {...props}
                    type={typeInput || type}
                    className={`${icon ? 'px-12' : ''
                        }
                        text-[12px]
                        placeholder:text-[12px]
                        text-[#333] py-1  outline-none ${error ? 'border-red-500' : isLogin ? 'border-[#1f1f1f]' : 'border-gray-200'
                        } w-full h-[40px] px-2 ${isLogin ? "border-b-[1px]" : "shadow-lg border-[1px] rounded-md"}`}
                />
                {icon && (
                    <div
                        className={`absolute  left-2
                            } top-1/2 text-[#D6D6D6] transform mx-3 -translate-y-1/2 text-2xl`}
                    >
                        {icon}
                    </div>
                )}
                {see && (
                    <button
                        title='See Password'
                        type='button'
                        aria-label={`see ${label}`}
                        onClick={handleVisible}
                        className={`absolute z-50 right-3 ${error ? 'top-1/2' : 'top-1/2'
                            } -translate-y-1/2 text-2xl`}
                    >
                        {visible ? (
                            <FaEyeSlash className='text-[#84818A]' />
                        ) : (
                            <IoEyeSharp className='text-[#84818A]' />
                        )}
                    </button>
                )}
                {error && <span className='absolute -bottom-6 left-0 text-red-500 text-sm'>{error}</span>}
            </div>
        </div>
    );
}
