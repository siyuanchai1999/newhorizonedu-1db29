import React from 'react';
import _ from 'lodash';

import {htmlToReact} from '../utils';
import {withPrefix} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionCta extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="block cta-block bg-accent outer">
              <div className="inner-large">
                <div className="grid">
                   
                  <div className="cell block-content">
                    {_.get(section, 'title', null) && (
                    <h2 className="block-title">{_.get(section, 'title', null)}</h2>
                    )}
                    {_.get(section, 'subtitle', null) && (
                    <p className="block-copy">
                      {htmlToReact(_.get(section, 'subtitle', null))}
                    </p>
                    )}
                  </div>
                  
                  {_.get(section, 'image', null) && (
                    <div className="cell block-buttons">
                      <img src={withPrefix(_.get(section, 'image', null))} alt={_.get(section, 'image_alt', null)} />
                    </div>
                  )} 
                  {_.get(section, 'image2', null) && (
                    <div className="cell block-buttons">
                      <img src={withPrefix(_.get(section, 'image2', null))} alt={_.get(section, 'image_alt2', null)} />
                    </div>
                  )} 
                  {/* {_.get(section, 'actions', null) && (
                  <div className="cell block-buttons">
                    <CtaButtons {...this.props} actions={_.get(section, 'actions', null)} />
                  </div>
                  )} */}
                </div>
              </div>
            </section>
        );
    }
}
