import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

/*Da studiare meglio*/
function ScrollToTop({ history }) 
{
  useEffect(() => 
  {
    console.log("useEffect");
    const unlisten = history.listen(() => 
    {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    return () => 
    { 
      unlisten();
    }
  }, []);

  return (null);
}

export default withRouter(ScrollToTop);