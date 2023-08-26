import React from 'react'

export default function Form() {
  return (
    <div>
      <form>
        <fieldset >
          <legend>DOCTOR LOGIN</legend>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">
              E-mail 
            </label>
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="disabledSelect" className="form-label">
              Password
            </label>
            <select id="disabledSelect" className="form-select">
              <option>Disabled select</option>
            </select>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="disabledFieldsetCheck"
                disabled
              />
              <label
                className="form-check-label"
                htmlFor="disabledFieldsetCheck"
              >
                Can't check this
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}
