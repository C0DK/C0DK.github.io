import React from "react";
import { IconRow, FAIcon, PlainA } from "./style";

import {
  faKeybase,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBook, faComment } from "@fortawesome/free-solid-svg-icons";

const LinkRow = () => (
  <IconRow>
    <Icon href="mailto:c@cwb.dk" icon={faEnvelope} />
    <Icon href="https://keybase.io/cabang" icon={faKeybase} />
    <Icon href="https://github.com/C0DK/" icon={faGithub} />
    <Icon href="https://www.linkedin.com/in/cabang/" icon={faLinkedin} />
    <Icon href="https://twitter.com/cabang_dk/" icon={faTwitter} />
    <Icon href="https://www.goodreads.com/user/show/129022892-casper-weiss-bang" icon={faBook} />
    <Icon href="https://blog.cwb.dk" icon={faComment} />
  </IconRow>
);

const Icon = ({ href, icon }: { href: string; icon: any }) => (
  <PlainA href={href} target="_blank">
    <FAIcon icon={icon} size="2x" />
  </PlainA>
);

export default LinkRow;