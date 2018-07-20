import React from 'react';

import ResultListing from './resultlisting';
import ProductListing from './productlisting';
import Link from 'gatsby-link'


import { Button, Form, FormGroup, Label, Input, FormText, Card, CardTitle, CardText, CardSubtitle} from 'reactstrap';

/* todo
     ReactGA.event({
        category: 'curlsbot',
        action: text,
        label: notCG
      });
*/

class Verdict extends React.Component {




  render() {
    let detect = this.props.data;
    return (
      <div >

      
      {detect == "bad" &&
        <Card body inverse color="danger">
            <CardTitle>Result: Not Curly Girl Approved</CardTitle>
           <CardText>My final verdict? Looks like this product is NOT curly girl approved. Try checking out one of our recommend products like  <ProductListing /> or take our  <Link to="/porosity/" className="btn btn-secondary">porosity quiz</Link> for customized recommendations.</CardText>
        </Card>
      }

      {detect == "unknown" &&
        <Card body inverse color="warning">
          <CardTitle>Result: Unknown</CardTitle>
           <CardText>You'll need to do your own research by looking up the unknown ingredients or <a href="http://m.me/curlsbot">messaging us</a>. Try checking out one of our recommend products like  <ProductListing /> or take our  <Link to="/porosity/" className="btn btn-secondary">porosity quiz</Link> for customized recommendations. </CardText>
        </Card>
      }

      {detect == "caution" &&
        <Card body inverse color="warning">
          <CardTitle>Result: Caution</CardTitle>
           <CardText>Some of these ingredients should be used with caution. Start a discussion at our <a href="https://www.facebook.com/groups/1804576666517325">Facebook Group</a> or <a href="http://m.me/curlsbot">message me</a> to get personalized advice. </CardText>
        </Card>
      }


      {detect == "good" &&
        <Card body inverse color="success">
            <CardTitle>Result: Curly Girl Approved</CardTitle>
           <CardText>Woohoo, I can't find anything wrong with this, looks like it's curly girl approved! But don't forget to read the label carefully and do a backup check yourself – ingredients listed online are not always accurate.</CardText>
        </Card>
      }





    </div>
    );

}

}


export default Verdict;


