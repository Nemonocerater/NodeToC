#include<stdio.h>

int main()
{
	int c;
	//putchar (getchar());


	while (EOF != (c = fgetc(stdin))) {
		putchar(c);
		fflush (stdout);
	}

	return 0;
}

