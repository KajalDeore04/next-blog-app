import React from 'react';

// This is the page component that will be rendered when the user navigates to /blogs/:id

const Page = ({params}) => {
    return (
        <div>
            {params.id}
        </div>
    );
}

export default Page;
