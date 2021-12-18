import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './pages.css';

const postContactData = (contactData) => {
    alert(`postContactData receives: ` + JSON.stringify(contactData));
}

function ContactForm(props) {
	const [contactData, setContactData] = useState({});
	const submit = (e) => {
		alert(`Form Submitted. Current state of 'contactData' is: ` + JSON.stringify(contactData));
		e.preventDefault();
		props.postContactData(contactData)
	};
	return (
		<div className="contact-form">
			<Form onSubmit={submit}>
				<FormGroup floating>
					<Input
						id="userName"
						name="userName"
						placeholder="Name"
						type="text"
						onChange={(e) => setContactData({ ...contactData, userName: e.target.value })}
					/>
					<Label for="userName">Name</Label>
				</FormGroup>{' '}
				<FormGroup floating>
					<Input
						id="email"
						name="email"
						placeholder="Email"
						type="email"
						onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
					/>
					<Label for="email">Email</Label>
				</FormGroup>{' '}
				<FormGroup floating>
					<Input
						id="phone"
						name="phone"
						placeholder="Phone Number"
						type="text"
						onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
					/>
					<Label for="phone">Phone Number</Label>
				</FormGroup>{' '}
				<FormGroup tag="fieldset">
					<legend>Preferred Contact Method</legend>
					<FormGroup check>
						<Label check>
							<Input type="radio" id="resEmail" name="resPref" onChange={(e) => setContactData({ ...contactData, resPref: e.target.value })} />
							Email
						</Label>
					</FormGroup>
					<FormGroup check>
						<Label check>
							<Input type="radio" id="resPhone" name="resPref" onChange={(e) => setContactData({ ...contactData, resPref: e.target.value })} />
							Phone
						</Label>
					</FormGroup>
				</FormGroup>
				<FormGroup tag="fieldset">
					<legend>Which Service(s) Are You Inquiring About?</legend>
					<FormGroup check>
						<Label check>
							<Input id="basicTune" type="checkbox" name="servInquiry" onChange={(e) => setContactData({ ...contactData, basicTune: e.target.value })} />
							Basic Tuning
						</Label>
					</FormGroup>
					<FormGroup check>
						<Label check>
							<Input id="pitchRaise" type="checkbox" name="servInquiry" onChange={(e) => setContactData({ ...contactData, pitchRaise: e.target.value })} />
							Pitch Raise
						</Label>
					</FormGroup>
					<FormGroup check>
						<Label check>
							<Input id="deluxeTune" type="checkbox" name="servInquiry" onChange={(e) => setContactData({ ...contactData, deluxeTune: e.target.value })} />
							Deluxe Tuning
						</Label>
					</FormGroup>
					<FormGroup check>
						<Label check>
							<Input id="soundDampen" type="checkbox" name="servInquiry" onChange={(e) => setContactData({ ...contactData, soundDampen: e.target.value })} />
							Sound Dampening
						</Label>
					</FormGroup>
					<FormGroup check>
						<Label check>
							<Input id="otherInquriy" type="checkbox" name="servInquiry" onChange={(e) => setContactData({ ...contactData, otherInquriy: e.target.value })} />
							Other/General Inquiry
						</Label>
					</FormGroup>
				</FormGroup>
				<FormGroup floating>
					<Input
						id="pianoLoc"
						name="pianoLoc"
						placeholder="Location of Piano"
						type="text"
						onChange={(e) => setContactData({ ...contactData, pianoLoc: e.target.value })}
					/>
					<Label for="pianoLoc">Location of Piano</Label>
				</FormGroup>{' '}
				<FormGroup floating>
					<Input
						id="otherInfo"
						name="otherInfo"
						placeholder="Other Info"
						type="text"
						onChange={(e) => setContactData({ ...contactData, otherInfo: e.target.value })}
					/>
					<Label for="otherInfo">Other Relevant Info</Label>
				</FormGroup>{' '}
				<Button type="submit">Submit</Button>
			</Form>
		</div>
	);
}

function Contact() {
	return (
		<div className="page-content">
			<div className="container">
				<div className="row">
					<div className="col">
						<h2>Contact Willamette Piano Service</h2>
						<p>
							Use this form to contact us, or reach us directly at: <a href="mailto:willamettepiano@gmail.com">willamettepiano@gmail.com</a>
						</p>
					</div>
				</div>
			</div>
			<ContactForm postContactData={postContactData} />
		</div>
	);
}

export default Contact;
