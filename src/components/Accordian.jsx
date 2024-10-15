import React from 'react';

export default function Accordion(props) {
    const mystyle = {
        color: props.mode === 'dark' ? 'white' : '#282828',
        backgroundColor: props.mode === 'dark' ? props.selectedColor : 'white',
    };

    return (
        <>
            <div style={mystyle} className='container'>
                <h2>Dark Mode</h2>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className={`accordion-button`}
                                style={mystyle}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                <strong>Accordion Item #1</strong>
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                        >
                            <div style={mystyle} className={`accordion-body`}>
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className={`accordion-button collapsed`}
                                style={mystyle}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                <strong>Accordion Item #2</strong>
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div style={mystyle} className={`accordion-body`}>
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className={`accordion-button collapsed`}
                                style={mystyle}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                <strong>Accordion Item #3</strong>
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div style={mystyle} className={`accordion-body`}>
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
