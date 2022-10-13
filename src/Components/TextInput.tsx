import { InputHTMLAttributes } from 'react';
import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps{
    children: ReactNode;
}

function TextInputRoot(props:TextInputRootProps){
    return(
        <div className='flex itens-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full text-gray-100 text-xs placeholder:text-gray-400 focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps{
    children: ReactNode;
}

export function TextInputIcon(props: TextInputIconProps){
    return(
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )

}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{
   
}

export function TextInputInput(props: TextInputInputProps){
    return(
            <input 
                className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
                {...props}
            />
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}