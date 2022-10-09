import React from "react";
import { IconRow, FAIcon, PlainA } from "./style";

import {
  faTwitter,
  faGithub,
  faLinkedin,
  faHashnode,
  faGoodreads,
  faStackOverflow
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const LinkRow = () => (
  <IconRow>
    <Icon href="mailto:c@cwb.dk" icon={faEnvelope} />
    <Icon href="https://github.com/C0DK/" icon={faGithub} />
    <Icon href="https://www.linkedin.com/in/cabang/" icon={faLinkedin} />
    <Icon href="https://twitter.com/cabang_dk/" icon={faTwitter} />
    <Icon href="https://www.goodreads.com/user/show/129022892-casper-weiss-bang" icon={faGoodreads} />
    <Icon href="https://stackoverflow.com/users/3806354/casper-bang" icon={faStackOverflow} />
    <Icon href="https://blog.cwb.dk" icon={faHashnode} />
  </IconRow>
);

const Icon = ({ href, icon }: { href: string; icon: any }) => (
  <PlainA href={href} target="_blank">
    <FAIcon icon={icon} size="2x" />
  </PlainA>
);

export default LinkRow;