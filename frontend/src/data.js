export function getSmallwords() {
  return [
    { abbr: '123', name: 'track' },
    { abbr: '12', name: 'australia' },
    { abbr: '230', name: 'discussion' },
    { abbr: '197', name: 'archive' },
    { abbr: '176', name: 'once' },
    { abbr: '82', name: 'others' },
    { abbr: '101', name: 'entertainment' },
    { abbr: '450', name: 'agreement' },
    { abbr: '100', name: 'format' }
  ];
}

export function matchWords(state, value) {
  return (
    state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    state.abbr.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}

   		
		
		
		
			
		
	
		
		
