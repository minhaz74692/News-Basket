import React from 'react'

function CountrySelect() {
    return (
        <>
            <form className='container pb-3 px-5 d-flex'>
                <select class="form-select form-select-sm" style={{ width: "50%" }} aria-label=".form-select-sm example">
                    <option selected>Select Country</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select form-select-sm" style={{ width: "50%" }} aria-label=".form-select-sm example">
                    <option selected>Select Language</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </form>
        </>
    )
}

export default CountrySelect
