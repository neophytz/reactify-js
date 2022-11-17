import React from 'react'
import {STUDENT_DB} from '../util/db/data'
import {RenderIf} from '../util/component/renderIf';

export const Analytics = () => {
  // STUDENT_DB.length = 0; // this will actually remove all items from the js array.

  // const checkContent = () => {
  //   if (STUDENT_DB.length > 0){
  //     return true
  //   }
  //   0 = false, "" -> false, undefined -> false, null -> false
  //   return !0; // this state is true.
  //   return !undefined; // this is also true
  //   return !"" // this is also true
  //   retuen !null; // this is also true;

  //   when does !! works -> when you want to check if a variable is defined or not!!

  //   return STUDENT_DB.length > 0;
  //   return !!STUDENT_DB.length; // this will also return true or false.
  //   return false;
  // }

  const isContentAvailable = STUDENT_DB.length > 0;
  // Object.key() -> return the keys of an object in the form of an array.
  const table_header = isContentAvailable ? Object.keys(STUDENT_DB[0]).map(el => el.split("_").join(" ")) : [];

  return (
    <div className='p-2'>
        <div className='row'>
          <div className='col-md-12 px-3'>

            <div className='d-flex py-2 mb-2 align-item-center justify-content-between'>
              <h5 className='m-0'>Students</h5>
              <RenderIf 
                condition={isContentAvailable}
                component={
                  <input type="text" placeholder='search' className='rounded-pill fs-7 bg-white border-0 px-3 py-2'/>
                }
              />
            </div>

            <RenderIf 
              condition={isContentAvailable}
              component={
                <table className='bg-white table table-hover rounded'>
                  <thead className='rounded'>
                    <tr>
                      {table_header.map((title, idx) => <th key={idx}>{title}</th>)}
                    </tr>
                  </thead>
                  <tbody>

                    {
                      STUDENT_DB.map((student, idx) => {
                        return (
                          <tr key={idx}>
                            {
                              Object.keys(student).map(
                                (attribute,idx) => <td key={idx}>{student[attribute]}</td>
                              )
                            }
                          </tr>
                        )
                      })
                    }

                  </tbody>
                </table>
              }
            />

            <RenderIf 
              condition={!isContentAvailable}
              component={
                <div className='p-5 rounded shadow mt-3 bg-dark text-center text-white mx-auto' style={{maxWidth: 500}}>
                  <h4>OOPS!</h4>
                  <p className='lead fs-6'>No content found, please consider creating some students from dashboard.</p>
                </div>
              }
            />

          </div>
        </div>
    </div>
  )
}
