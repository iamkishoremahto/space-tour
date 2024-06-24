
export default function MainContainer({ children, desktopBg, tabBg, mobileBg }) {
    
    return (

        <>
            <div className={`
                            ${mobileBg}
                            ${tabBg}
                            ${desktopBg}

                            border grid  place-content-center
                            bg-no-repeat
                            bg-cover
                            
                            min-h-screen
                            min-w-screen`}>
                {children}
                


            </div>
        </>
    )


}