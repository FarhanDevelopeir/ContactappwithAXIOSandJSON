import React from 'react'

const Personaldetails = () => {
    return (
        <div>
            <form class="ui form">
                <div class="field">
                    <label> Name :</label>
                    <input type="text" name="first-name" placeholder="First Name" />
                </div>
                <div class="field">
                    <label>Email : </label>
                    <input type="text" name="last-name" placeholder="Last Name" />
                </div>
                <div class="field">
                    <label>Contact Number :</label>
                    <input type="text" name="last-name" placeholder="Last Name" />
                </div>
                <button class="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Personaldetails