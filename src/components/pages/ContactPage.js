import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

function Contact() {
	return (
		<div className="page-content">
			<div className="container">
				<div className="row">
					<div className="col">
						<h2>Contact Willamette Piano Service</h2>
						<p>
							Use the form below to contact us, or reach us directly at:{' '}
							<a href="mailto:willamettepiano@gmail.com">willamettepiano@gmail.com</a>
						</p>
					</div>
				</div>
			</div>
			<div className="contact-form">
				<Form>
					<FormGroup floating>
						<Input id="name" name="name" placeholder="Name" type="text" />
						<Label for="name">Name</Label>
					</FormGroup>{' '}
                    <FormGroup floating>
						<Input id="email" name="email" placeholder="Email" type="email" />
						<Label for="email">Email</Label>
					</FormGroup>{' '}
					<FormGroup floating>
						<Input id="phone" name="phone" placeholder="Phone Number" type="text" />
						<Label for="name">Phone Number</Label>
					</FormGroup>{' '}
                    <FormGroup tag="fieldset">
                        <legend>Preferred Contact Method</legend>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="respondPref" />
                                Email
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="respondPref" />
                                Phone
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <legend>Which Service(s) Are You Inquiring About?</legend>
                        <FormGroup check>
                            <Label check>
                                <Input id="basicTune" type="checkbox" name="serviceInquiry" />
                                Basic Tuning
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input id="pitchRaise" type="checkbox" name="serviceInquiry" />
                                Pitch Raise
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input id="deluxeTune" type="checkbox" name="serviceInquiry" />
                                Deluxe Tuning
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input id="soundDampen" type="checkbox" name="serviceInquiry" />
                                Sound Dampening
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input id="otherInquriy" type="checkbox" name="serviceInquiry" />
                                Other/General Inquiry
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup floating>
						<Input id="pianoLoc" name="pianoLoc" placeholder="Location of Piano" type="text" />
						<Label for="name">Location of Piano</Label>
					</FormGroup>{' '}
                    <FormGroup floating>
						<Input id="otherInfo" name="otherInfo" placeholder="Other Info" type="email" />
						<Label for="email">Other Relevant Info</Label>
					</FormGroup>{' '}
                    <Button>
                        Submit
                    </Button>
				</Form>
			</div>
		</div>
	);
}

export default Contact;
