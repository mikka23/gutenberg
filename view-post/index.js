/**
 * External dependencies
 */
import moment from 'moment-timezone';
import 'moment-timezone/moment-timezone-utils';

/**
 * WordPress dependencies
 */
import { Button, ifCondition, Tooltip } from '@wordpress/components';
import { compose, render } from '@wordpress/element';
import { settings as dateSettings } from '@wordpress/date';

// Configure moment globally
moment.locale( dateSettings.l10n.locale );
if ( dateSettings.timezone.string ) {
	moment.tz.setDefault( dateSettings.timezone.string );
} else {
	const momentTimezone = {
		name: 'WP',
		abbrs: [ 'WP' ],
		untils: [ null ],
		offsets: [ -dateSettings.timezone.offset * 60 ],
	};
	const unpackedTimezone = moment.tz.pack( momentTimezone );
	moment.tz.add( unpackedTimezone );
	moment.tz.setDefault( 'WP' );
}

const ViewPost = ( ) => (
	<div>
		<Tooltip text="More information">
			<Button>
				Hover for more information
			</Button>
		</Tooltip>
	</div>
);

/**
 * Renders post's view.
 *
 * The return value of this function is not necessary if we change where we
 * call initializeEditor(). This is due to metaBox timing.
 */
export function init() {
	const target = document.querySelector( '.fusion-breadcrumbs' );

	render(
		<ViewPost />,
		target
	);
}
